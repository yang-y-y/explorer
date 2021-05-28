/*
    render filter
*/
import moment from 'moment';
export default {
    formatthis(inttime) {
        let time = inttime*1000;
        const format="YYYY-MM-DD";
        const formatDate="YYYY-MM-DD";
        const formatTime="HH:mm:ss";
        let timeStr=moment(time).format(format);
        if(moment(time).format(formatDate)===moment().format(formatDate)){
            const fromNowStr=moment(time).fromNow(true);
            if(fromNowStr.indexOf("小时")>0&&parseInt(fromNowStr)>5){
                timeStr="今天 "+moment(time).format(formatTime);
            }else {
                timeStr=moment(time).format(format)
            }
        }
        return timeStr
    }
    
}