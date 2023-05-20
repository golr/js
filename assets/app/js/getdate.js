function getDateDiff(time) {
    // 当前时间
    let nowTime = new Date();
    let year = nowTime.getFullYear();
    let month = nowTime.getMonth() + 1;
    let day = nowTime.getDate();
    let hours = parseInt(nowTime.getHours());
    let minutes = nowTime.getMinutes();
    // 传来time 2018-05-25 18:14:02 分解
    let timeyear = time.substring(0, 4);
    let timemonth = time.substring(5, 7);
    let timeday = time.substring(8, 10);
    let timehours = parseInt(time.substring(11, 13));
    let timeminutes = time.substring(14, 16);
    let timesecond = time.substring(17, 19);
    let d_year = year - timeyear;
    let d_month = Math.abs(month - timemonth);
    let d_day = Math.abs(day - timeday);
    let d_hours = Math.abs(hours - timehours);
    let d_minutes = Math.abs(minutes - timeminutes);
    if (d_day > 1) {
      return timeyear + '-' + timemonth + '-' + timeday + '\n' + timehours + ':' + timeminutes + ':' + timesecond;
    } else if (d_day == 0 && d_hours > 0 && d_hours <= 24) {
      return d_hours + '小时前';
    } else if (d_day == 1) {
      if (d_hours > 0 && d_hours <= 24){
        return hours + (24 - timehours) + '小时前';
      }else{
        return timeyear + '-' + timemonth + '-' + timeday + '\n' + timehours + ':' + timeminutes + ':' + timesecond;
      }
    } else if (d_minutes > 0 && d_minutes <= 60) {
      return d_minutes + '分钟前';
    } else {
      return '1分钟前';
    }
  }
