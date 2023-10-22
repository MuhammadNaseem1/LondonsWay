import axios from 'axios';

export const registerAPI = async(number, password) => {
        
        
    return new Promise((resolve, reject) => {
        axios.post('http://localhost:3000/register', {
          number: number,
          password: password,
        })
        .then(response => {
          // Handle the response data here
          resolve(response.data); // Resolve the Promise with the response data
        })
        .catch(error => {
          // Handle the error here
          reject(error); // Reject the Promise with the error
        });
      });
 
 
    // try{
    //   await axios.post('http://localhost:3000/register'
    //     ,{
    //         number:'032430439999',
    //         password:'12345'
    //     })
    // }catch(e){
    // console.log("e",JSON.stringify(e))
    // }

}