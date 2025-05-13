function zip1<T, U>(a: T[], b: U[]): [T, U][] {
  const result: [T, U][] = [];
  for (let i = 0; i < a.length; i++) {
    result.push([a[i], b[i]]);
  }
  return result;
}

function zip2<T, U>(a: T[], b: U[]): [T, U][] {
  return a.map((x, i) => [x, b[i]]);
}

function zip3<T, U>(a: T[], b: U[]): [T, U][] {
  return a.reduce((acc, x, i) => [...acc, [x, b[i]]], [] as [T, U][]);
}

function zip4<T, U>(a: T[], b: U[]): [T, U][] {
  return a.flatMap((x, i) => [[x, b[i]]]);
}

type Zip<One extends unknown[], Other extends unknown[]> = One extends [
  infer First,
  ...infer Rest
]
  ? Other extends [infer OtherFirst, ...infer OtherRest]
    ? [[First, OtherFirst], ...Zip<Rest, OtherRest>]
    : []
  : [];

type ZipRes = Zip<[1, 2, 3], [4, 5, 6]>;

type Mutable<T> = {
  -readonly [P in keyof T]: T[P];
};

function zip(target: unknown[], source: unknown[]): unknown[];
function zip<
  Target extends readonly unknown[],
  Source extends readonly unknown[]
>(Target: Target, Source: Source): Zip<Mutable<Target>, Mutable<Source>>;

function zip(target: unknown[], source: unknown[]) {
  if (!target.length || !source.length) return [];
  const [one, ...rest] = target;
  const [other, ...rest2] = source;
  return [[one, other], ...zip(rest, rest2)];
}

const res = zip([1, 2, 3] as const, [4, 5, 6] as const);
console.log(res);
