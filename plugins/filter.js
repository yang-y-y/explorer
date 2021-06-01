import Vue from "vue";
import moment from 'moment';

export default ({ app, store, i18n }) => {
    Vue.filter("CountUp", (inttime)=>{
        let time = inttime*1000;
        const format="YYYY-MM-DD HH:mm:ss";
        const formatDate="YYYY-MM-DD";
        const formatTime="HH:mm:ss";
        let timeStr=moment(time).format(format);
        if(moment(time).format(formatDate)===moment().format(formatDate)){
            const fromNowStr=moment(time).fromNow(true);
            if(fromNowStr.indexOf("小时")>0&&parseInt(fromNowStr)>5){
                timeStr="今天 "+moment(time).format(formatTime);
            }else {
                timeStr=fromNowStr
            }
        }
        return timeStr
    }),
    Vue.filter("hashInit", (num) =>{
        let initnum = '';
        if(num>=1000&&num<1000*1000){
            return initnum = (num / 1000)+'KH/s';
        }else if(num>=1000*1000&&num<(1000*1000*1000)-1){
            return initnum = num / (1000*1000)+'MH/s';
        }else if(num>=1000*1000*1000&&num<(1000*1000*1000*1000)-1){
            return initnum = num / (1000*1000*1000) +'GH/s';
        }else if(num>=1000*1000*1000*1000&&num<(1000*1000*1000*1000*1000)-1){
            return initnum = (num / (1000*1000*1000*1000)).toFixed(2)+'TH/s';
        }else if(num>=1000*1000*1000*1000*1000&&num<(1000*1000*1000*1000*1000*1000)-1){
            return initnum = (num / (1000*1000*1000*1000*1000)).toFixed(2)+'PH/s';
        }else if(num>=1000*1000*1000*1000*1000*1000&&num<(1000*1000*1000*1000*1000*1000*1000)-1){
            return initnum = (num / (1000*1000*1000*1000*1000*1000)).toFixed(2)+'EH/s';
        }else{
            return initnum = num + 'H/s'
        }
    }),
    Vue.filter("DifficultyInit", (num) =>{
        let initnum = '';
        let matha = 1024;
        if(num>=matha&&num<Math.pow(matha,2)){
            return initnum = (num / 1024)+'K';
        }else if(num>=Math.pow(matha,2)&&num<Math.pow(matha,3)-1){
            return initnum = num / Math.pow(matha,2)+'M';
        }else if(num>=Math.pow(matha,3)&&num<Math.pow(matha,4)-1){
            return initnum = num / Math.pow(matha,3) +'G';
        }else if(num>=Math.pow(matha,4)&&num<Math.pow(matha,5)-1){
            return initnum = (num / (1024**4)).toFixed(2)+'T';
        }else if(num>=Math.pow(matha,5)&&num<Math.pow(matha,6)-1){
            return initnum = (num / Math.pow(matha,5)).toFixed(2)+'P';
        }else if(num>=Math.pow(matha,6)&&num<Math.pow(matha,7)-1){
            return initnum = (num / Math.pow(matha,6)).toFixed(2)+'E';
        }else{
            return initnum = num + 'K'
        }
    }),
    Vue.filter("sizeInit", (num) =>{
        let initnum = 0;
        if(num>=1024&&num<1024*1024){
            return initnum = (num / 1024).toFixed(2)+'MB';
        }else if(num>=1024*1024&&num<(1024*1024*1024)-1){
            return initnum =( num / (1024*1024)).toFixed(2)+'GB';
        }else if(num>=1024*1024*1024&&num<(1024*1024*1024*1024)-1){
            return initnum = (num / (1024*1024*1024)).toFixed(2) +'TB';
        }else if(num>=1024*1024*1024*1024&&num<(1024*1024*1024*1024*1024)-1){
            return initnum = (num / (1024*1024*1024*1024)).toFixed(2)+'EB';
        }else{
            return initnum = num + 'KB'
        }
    }),
    Vue.filter("parseinit", (num) =>{
        if(!num) return 0
        return num.toFixed(2)
    })

    Vue.filter("numInit", function (number, decimals = 0, decPoint = '.', thousandsSep = ',') {
        number = (number + '').replace(/[^0-9+-Ee.]/g, '')
        let n = !isFinite(+number) ? 0 : +number
        let prec = !isFinite(+decimals) ? 0 : Math.abs(decimals)
        let sep = (typeof thousandsSep === 'undefined') ? ',' : thousandsSep
        let dec = (typeof decPoint === 'undefined') ? '.' : decPoint
        let s = ''
        let toFixedFix = function (n, prec) {
          let k = Math.pow(10, prec)
          return '' + Math.ceil(n * k) / k
        }
        s = (prec ? toFixedFix(n, prec) : '' + Math.round(n)).split('.')
        let re = /(-?\d+)(\d{3})/
        while (re.test(s[0])) {
          s[0] = s[0].replace(re, '$1' + sep + '$2')
        }
        if ((s[1] || '').length < prec) {
          s[1] = s[1] || ''
          s[1] += new Array(prec - s[1].length + 1).join('0')
        }
        return s.join(dec)
      })


    // 1K=1024  1M=1024k  1G=1024M 1T=1024G 1P=1024T 1E=1024P
    
}
