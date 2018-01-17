module.exports = class User {
  constructor(
    name='',
    emailAddress='',
    displayName='',
    slug='',
    profileLinkBitbucket='',
    profilePictureLink='',
    likesReceivedTotal=0
  ) {
    this = {
      name,
      emailAddress,
      displayName,
      slug,
      profileLinkBitbucket,
      profilePictureLink,
      likesReceivedTotal,
    };

    //data type validation list
    const NUMBER_PROPERTY = {
      likesReceivedTotal: 1,
    }
  }
  add(propertyName, additionTotal) {
    if (NUMBER_PROPERTY[propertyName]) {
      this[propertyName] +=additionTotal;
    }
    throw Error (`${propertyName} is not a valid property for addition!`);
  }
  deduct(propertyName, deductionTotal) {
    if (INTEGER_ONLY[propertyName]) {
      this[propertyName] -=deductionTotal;
    }
    throw Error (`${propertyName} is not a valid property for deduction!`);
  }
  set(propertyName, value) {
    if (this[propertyName]) {
      this[propertyName] = value;
    }
    throw Error (`${propertyName} is not a valid property for a User instance!`);
  }
}
