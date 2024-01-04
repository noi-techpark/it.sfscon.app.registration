export const validateEmail = /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/i;

export const validatePhoneNumber =
  /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/;

export const filterObject = (objToFilter) => {
  return Object.keys(objToFilter)
    .filter((s) => {
      return objToFilter[s];
    })
    .reduce((obj, key) => {
      return Object.assign(obj, {
        [key]: objToFilter[key],
      });
    }, {});
};

export const getObjectIdByKey = (obj) => {
  return (
    obj &&
    Object.keys(obj).map((key) => {
      return {
        id: key,
        ...obj[key],
      };
    })
  );
};

export const isValidUUID = (uuid) => {
  const regexExp =
    /^[0-9a-f]{8}-[0-9a-f]{4}-[1-5][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}$/i;
  return regexExp.test(uuid);
};
