export const hitTestObject = (objectA, objectB) => {
  return (
    objectA.x + objectA.width >= objectB.x &&
    objectB.x + objectB.width >= objectA.x &&
    objectA.y + objectA.height >= objectB.y &&
    objectB.y + objectB.height >= objectA.y
  );
};
