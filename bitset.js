class Bitset {
	
	constructor (size)
	{
		this.size = size;
		this.array = [];
		if (this.size%32)
		{
			this.array.length = Math.floor(this.size/32)+1;
		}
		else
		{
			this.array.length = this.size/32;
		}
		this.array.fill(0,0,this.array.length);
	}

	set (bit)
	{
		 let i = Math.floor(bit/32);
		 this.array[i] ^= (1 << bit);
	}
	
	reset (bit)
        {
                let i = Math.floor(bit/32);
                if (this.array[i]<<bit&1)
		{
		this.array[i] ^= (1 << bit);
		}
				
	}

	
}

let bit_set = new Bitset(65);
bit_set.set(5);
bit_set.reset(67);

console.log (bit_set.array[0]);

