export default function updateUniqueItems(mapInstance) {
  if (!(mapInstance instanceof Map)) {
    throw new Error('Cannot process');
  }
  mapInstance.forEach((value, key) => {
    if (value === 1) {
      mapInstance.set(key, 100);
    }
  });
  return mapInstance;
}
