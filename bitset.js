class Bitset {
	
	constructor (size)
	{
		this.size = size;
		this.array = [];
		this.unit = 32;
		this.index;
		if (this.size%this.unit){this.array.length = Math.ceil(this.size/this.unit);}
		this.array.length = this.size/this.unit;
		this.array.fill(0,0,this.array.length);
	}
	set (pos)
	{	
		if (pos < 0) {throw "Give positive number"}
		if (pos > this.size) {throw "Out of range"} 
		this.index = Math.floor(pos/this.unit);
		this.array[this.index] |= (1 << pos % this.unit);
	}
	reset (pos)
        {		
		if (pos < 0) {throw "Give positive number"}
		if (pos > this.size) {throw "Out of range"} 
            	this.index = Math.floor(pos/this.unit);
            	this.array[this.index] &= ~((1 << pos % this.unit));
	}

	
}

