// 从数组中随机抽入count数量个元素，不可重复
function randomDraw(arr, count) {
  if (!Array.isArray(arr) || arr.length === 0 || count <= 0 || count > arr.length) {
    throw new Error('Invalid input parameters');
  }

  const shuffled = [...arr];
  for (let i = shuffled.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
  }

  return shuffled.slice(0, count);
}
