app = new Vue(
    {
        el:'#root',
        data: {
            list: [],
        },
        
            methods: {
                generateEmail() {
                    for (let i = 0; i < 10; i++) {
                        axios
                        .get('https://flynn.boolean.careers/exercises/api/random/mail') 
                        .then((resp) => {
                        const email = resp.data.response;
                        console.log(email);
                        this.list.push(email)
                        })}
                }
            }
        }
        
        
    
);

 