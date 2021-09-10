import axios from "axios"

async function getData(){
    const resp = await axios.get("https://www.letsfun.cn/api/1")
    console.log(resp);
}

getData()