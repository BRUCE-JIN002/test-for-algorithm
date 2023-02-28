function canVisitAllRooms(rooms) {
  return dfs(rooms, 0, new Set());
}

function dfs(rooms, index, set) {
  set.add(index);
  let room = rooms[index];
  for (let i = 0; i < room.length; i++) {
    if (set.size === rooms.length) break;
    if (!set.has(room[i])) {
      dfs(rooms, room[i], set);
    }
  }
  return set.size === rooms.length;
}
