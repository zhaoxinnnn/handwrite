const PENDING = 'PENDING';
const RESOLVE = 'RESOLVE';
const REJECTED = 'REJECTED';

class Promise {
	constructor(executor) {
	    this.status = PENDING;
		this.value = undefined; //then方法要
		this.reason = undefined; //then方法要用
		let resolve = (value) => {
			if(this.status == PENDING){
				this.value = value
				this.status = RESOLVE;
			}
		}
		let reject = (reason) => {
			if(this.status == PENDING){
				this.reason = reason;
				this.status = REJECTED;
			}
		}
		try{
			executor(resolve, reject);
		}catch(e){
			console.log('catch错误', e);
			reject(e);
		}
	}
	then(onfulfilled, onrejected){
		if(this.status == RESOLVE){
			onfulfilled(this.value);
		}
		if(this.status == REJECTED){
			onrejected(this.reason)
		}
		
	}
}
module.exports = Promise;