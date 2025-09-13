class BrowserEncryptor {
  private password: string;
  private salt: string;
  private encoder: TextEncoder;
  private decoder: TextDecoder;

  constructor(password: string, salt: string) {
    this.password = password;
    this.salt = salt;
    this.encoder = new TextEncoder();
    this.decoder = new TextDecoder();
  }

  // 生成密钥
  private async generateKey(): Promise<CryptoKey> {
    const keyMaterial = await window.crypto.subtle.importKey(
      "raw",
      this.encoder.encode(this.password),
      { name: "PBKDF2" },
      false,
      ["deriveBits", "deriveKey"]
    );

    return window.crypto.subtle.deriveKey(
      {
        name: "PBKDF2",
        salt: this.encoder.encode(this.salt),
        iterations: 100000,
        hash: "SHA-256"
      },
      keyMaterial,
      { name: "AES-CBC", length: 256 },
      false,
      ["encrypt", "decrypt"]
    );
  }

  // 加密方法
  public async encrypt(text: string): Promise<string> {
    const key = await this.generateKey();
    const iv = window.crypto.getRandomValues(new Uint8Array(16));
    const encryptedData = await window.crypto.subtle.encrypt(
      {
        name: "AES-CBC",
        iv
      },
      key,
      this.encoder.encode(text)
    );

    // 将 iv 和加密数据转换为 base64
    const ivBase64 = btoa(String.fromCharCode(...iv));
    const encryptedBase64 = btoa(
      String.fromCharCode(...new Uint8Array(encryptedData))
    );

    return `${ivBase64}:${encryptedBase64}`;
  }

  // 解密方法
  public async decrypt(encrypted: string): Promise<string> {
    const [ivBase64, encryptedBase64] = encrypted.split(":");
    const iv = new Uint8Array(
      atob(ivBase64)
        .split("")
        .map((c) => c.charCodeAt(0))
    );
    const encryptedData = new Uint8Array(
      atob(encryptedBase64)
        .split("")
        .map((c) => c.charCodeAt(0))
    );

    const key = await this.generateKey();
    const decryptedData = await window.crypto.subtle.decrypt(
      {
        name: "AES-CBC",
        iv
      },
      key,
      encryptedData
    );

    return this.decoder.decode(decryptedData);
  }
}

// 使用示例
const encryptor = new BrowserEncryptor("密码", "salt");

// 由于使用了异步API，需要使用 async/await
async function example() {
  const data = {
    key0: 42,
    key1: "g9a2x",
    key2: [true, { key0: null, key1: "8fj3s" }, 87],
    key3: { key0: ["z4k1m", false], key1: 12 },
    key4: null
  };

  try {
    // 加密
    const text = JSON.stringify(data);
    const encrypted = await encryptor.encrypt(text);
    console.log("加密后:", encrypted);

    // 解密
    const decrypted = await encryptor.decrypt(encrypted);
    console.log("解密后:", decrypted);
    console.log("解析后的数据:", JSON.parse(decrypted));
  } catch (error) {
    console.error("加解密过程出错:", error);
  }
}

example();
