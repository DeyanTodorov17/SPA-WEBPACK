const authService = {
    getForm(target,...x){
        let formData = new FormData(target)
        return x.reduce((acc,param)=>{
            acc[param] = formData.get(param);
            return acc;
        },{})
    },
    getData(){
        if(localStorage.getItem("user")){
            let email = JSON.parse(localStorage.getItem("user")).email
            return {
                isAuthenticated: true,
                email
            }
        }
        return {isAuthenticated:false}
    },
    register(e){
        e.preventDefault()
        const {email,password,repeatPassword} = this.getForm(e.target.parentElement,"email","password","repeatPassword")
        if(password !== repeatPassword){
            return
        }
        console.log(firebase.auth());
    },
    login(){

    },
    logout(){

    }
}

export default authService