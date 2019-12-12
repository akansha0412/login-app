import data from '../data';
// const socialMediaList = data.SocialMedias;

const loginReducer = (state = [], action) => {
    switch(action.type) {
        case 'ADD_POST':
         // return state.concat([action.data]);
         return data;
        default:
          return state;
      }
}
export default loginReducer;