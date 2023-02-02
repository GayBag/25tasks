class Bitset {
	
	constructor (size)
	{
		this.size = size;
		this.array = [];
		if (this.size%32)
		{
			this.array.length = Math.ceil(this.size/32);
		}
		else
		{
			this.array.length = this.size/32;
		}
		this.array.fill(0,0,this.array.length);
	}

	set (bit)
	{
		if (bit > (this.array.length*this.size) || bit < 0)
		{
			throw "Out of range ";
		}
		 let i = Math.floor(bit/32);
		 this.array[i] |= (1 << bit%32);
	}
	
	reset (bit)
        {
                let i = Math.floor(bit/32);
                if (this.array[i]<<bit&1)
		{
		this.array[i] ^= (1 << bit%32);
		}
				
	}

	
}

