import axios from 'axios';

const instance = axios.create({             // 공식문서에서 axios 객체를 instance라고 부름
    headers: {"Content-Type" : "application/json"},
    timeout: 2000                           // axios는 기본적으로 요청을 보내면 응답이 오기전까지 대기한다
                                            // 그것에 대한 리미트 시간을 정해주는것
})

export default instance