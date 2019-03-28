export const peopleFilter = (searchWord, peopleArray) => {
    const regex = new RegExp('^'+searchWord);
    return peopleArray.filter((people) => 
      regex.test(people.firstName) || 
      regex.test(people.lastName) ||
      regex.test(people.firstName.toLowerCase()) ||
      regex.test(people.lastName.toLowerCase()) ||
      regex.test(people.position) ||
      regex.test(people.position.toLowerCase()) ||
      regex.test(people.location) ||
      regex.test(people.location.toLowerCase())
    );
}