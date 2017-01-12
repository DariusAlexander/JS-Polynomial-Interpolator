/*
Messages:

pair of ints or floats:
	add XY coordinates to the method

float:
	interpolate Y value at the float value of X
	
message "clear":
	clears all XY coordinates

*/

inlets = 1
outlets = 1

var xfloat
var x = []
var y = []
var n
var denom
var numer
var sum


function list()
{
	if(x.indexOf(arguments[0])==-1 && arguments.length==2)
	{
		newLength = x.push(arguments[0])
		newLength = y.push(arguments[1])
		n = x.length-1
	}
}


function msg_float(xfloat)
{
	if(x.length<=1)
	{
		post("Number of points = ", x.length, ". Needs more coordinates")
		post()
	}
	else
	{
		sum = 0
		for(j=0; j<=n; j++)
		{
			numer = y[j]
			denom = 1
			for(i=0; i<=x.length-1; i++)
			{
				if(i!==j)
				{
					numer *= (xfloat-x[i])
					denom *= (x[j]-x[i])
				}
			}
			sum += (numer/denom)
		}
		outlet(0,sum)
	}
}


function anything()
{
	if(messagename=="clear")
	{
		x = []
		y = []
		n=-1
	}
}