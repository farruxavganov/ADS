class KNN{
	constructor(k){
		this.k = k;
		this.data = []
	}

	train(featurs, lable){
		for(let i = 0; i < featurs.length; i++){
			this.data.push({featurs: featurs[i], lable: lable[i]})
		}
	}


	predict(featur){
		const distanses = [];
		for(let i = 0; i < this.data.length; i++){
			const distans = this.distanse(featur,this.data[i].featurs);
			
			distanses.push({distans, lable: this.data[i].lable})

		}

		distanses.sort((a, b) => a.distans - b.distans);

		const knn = distanses.slice(0, this.k)
		console.log(distanses)		
		const lableCount = [];

		for(let i = 0; i < knn.length; i++){
			const lable = knn[i].lable
			lableCount[lable] = (lableCount[lable] || 0) + 1;
		}

		let maxCount = 0;
		let predictedLable;

		for(const lable in lableCount){
			
			if(lableCount[lable] > maxCount){
				maxCount = lableCount[lable]
				predictedLable = lable
			}
		}

		return predictedLable;
	}

	distanse(featur, trainFeatur){
		
		let sum = 0;
		for(let i = 0; i < featur.length; i++){
			sum += Math.pow(featur[i] - trainFeatur[i], 2);
		}
		
		return Math.sqrt(sum);
	}
}

const featurs = [[2,3],[3,4],[4,5], [5,6]];
const lables = ["A", "A", "B", "B"];

const knn = new KNN(3);

knn.train(featurs, lables);
const result = knn.predict([2.5, 3.5])

console.log(result)
