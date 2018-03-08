import moment from "moment";

export default class DateUtils {
	static getCurrentYear(){
		return ((new Date().getYear()) + 1900);
	}

    static getDaysRemaining(dateString){
        // here date string is in format mm/dd/yyyy
        return Math.ceil((DateUtils.parse(dateString) - new Date())/(1000*60*60*24));
    }

    // parse a date in mm/dd/yyyy format
    static parse(input) {
        var parts = input.split('/');
        // new Date(year, month [, day [, hours[, minutes[, seconds[, ms]]]]])
        return new Date(parts[2], parts[0]-1, parts[1]); // Note: months are 0-based
    }

    static formatDate(date,format){
        return moment(date).format(format);
    }

    static getCurrentDateTimeString(){
        return DateUtils.formatDate(new Date(),"DD_MM_YYYY_HH_mm_ss");
    }
};