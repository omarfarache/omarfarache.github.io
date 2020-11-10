
function setfocus() {
	document.calcform.x.focus();
}
function calc() {
	x = document.calcform.x.value;
 	y = calcfunc(x);
 	y = roundresult(y);
 	document.calcform.y.value = y
}
function calc_a() {
	x = document.calcform2.x.value;
 	y = calcfunc_a(x);
 	y = roundresult(y);
 	document.calcform2.y.value = y
}
function calc3() {
	x1 = document.calcform.x.value;
	x2 = document.calcform.x2.value;
 	y = calcfunc(x1,x2);
 	y = roundresult(y);
 	document.calcform.y.value = y;
}
function calc4() {
	a = document.calcform.x.value;
	b = document.calcform.x2.value;
	c = document.calcform.x3.value;
	d = b*b-4*a*c;
 	document.calcform.y0.value = roundresult(d);
 	if( d>=0 )
 	{
	 	document.calcform.y1.value = roundresult((-b+Math.sqrt(d))/(2*a));
	 	document.calcform.y2.value = roundresult((-b-Math.sqrt(d))/(2*a));
 	}
 	else
 	{
 		re = roundresult(-b/(2*a));
 		im = roundresult(Math.sqrt(-d)/(2*a));
	 	document.calcform.y1.value = re+' + i'+im;
	 	document.calcform.y2.value = re+' - i'+im;
 	}
 	b=-b;
 	document.calcform.y3.value = '('+b.toString()+' \xb1 \u221A('+d.toString()+')) / (2\xd7'+a.toString()+')';
}
function calc5() {
	x = document.calcform.x.value;
 	y = calcfunc(x);
 	y = roundresult(y);
 	if( x>0 ) y='\u00B1'+y;
 	document.calcform.y.value = y
}
function calc6() {
	x1 = document.calcform.x.value;
	x2 = document.calcform.x2.value;
	val=x2;
	if( x2<0 ) val=-val;
 	y = calcfunc(x1,val);
 	y = roundresult(y);
 	if( x2>0 && (x1/2)==Math.round(x1/2) ) y='\u00B1'+y;
 	if( x2<0 ) {
 		if( (x1/2)==Math.round(x1/2) )
 			y='NaN';
 		else
 			y=-y;
 	}
 	document.calcform.y.value = y;
}
function roundresult(x) {
 	y = parseFloat(x);
 	y = roundnum(y,10);
 	return y;
}
function roundnum(x,p) {
	var i;
 	var n=parseFloat(x);
	var m=n.toPrecision(p+1);
	var y=String(m);
	i=y.indexOf('e');
	if( i==-1 )	i=y.length;
	j=y.indexOf('.');
	if( i>j && j!=-1 ) 
	{
		while(i>0)
		{
			if(y.charAt(--i)=='0')
				y = removeAt(y,i);
			else
				break;
		}
		if(y.charAt(i)=='.')
			y = removeAt(y,i);
	}
	return y;
}
function roundnum2(x,p) {
	var i;
 	var n=parseFloat(x);
	var m=n.toFixed(p);
	var y=String(m);
	i=y.length;
	j=y.indexOf('.');
	if( i>j && j!=-1 ) 
	{
		while(i>0)
		{
			if(y.charAt(--i)=='0')
				y = removeAt(y,i);
			else
				break;
		}
		if(y.charAt(i)=='.')
			y = removeAt(y,i);
	}
	return y;
}
function removeAt(s,i) {
	s = s.substring(0,i)+s.substring(i+1,s.length);
	return s;
}
var gcd = function(a, b) {
    if ( ! b) {
        return a;
    }
    return gcd(b, a % b);
};


var CHARS = new Array();
            function incremente() {
                
                rand = Math.floor(Math.random() * (1000000 - 0)) + 0;
                randy = Math.round(rand);

                $outChar = randy;
                $first = $outChar;
                var place1=document.getElementById('first');
                place1.innerHTML=$first;

                    CHARS.push($first);
                    $second = CHARS.toString();
                for (i=0;i<CHARS.length;i++)
                {
                    var place2=document.getElementById('second');
                    place2.innerHTML=$second;
                }
            }
            var CHARS1 = new Array();
            function genRanNumb() {
                
                var min = parseInt(document.getElementById('min').value, 10);
                var max = parseInt(document.getElementById('max').value, 10);
                rand = Math.floor(Math.random()*(max-min+1)+min);    
                randy = Math.round(rand);

                $outChar = randy;
                $first = $outChar;
                var place1=document.getElementById('demo');
                place1.innerHTML=$first;

                CHARS1.push($first);
                    $second = CHARS1.toString();
                for (i=0;i<CHARS1.length;i++)
                {
                    var place2=document.getElementById('demo');
                    place2.innerHTML=$second;
                }

            }
			var irow=0;
		
			$( document ).ready(function() {
				$("#calc").click( Calc );
				$("#addrow").click( AddRow );
				for(i=0; i<3; i++)
					AddRow();
			});
	
			function OnCalc()
			{
				var num = new Array();
				txt = document.calcform.TextArea1.value;
				if( txt=="" ) txt="1 3 5";
				txt = txt.replace(/\054/g," ");
				txt = txt.replace(/\r\n/g," ");
				txt = txt.replace(/\n/g," ");
				if( txt.charAt(txt.length-1)==" " )
					txt = txt.substring(0,txt.length-1);
				n = txt.split(" ");
				for(i=0; i<n.length; i++)
					num[i] = parseFloat(n[i]);
				m = 0;
				for(i=0; i<num.length; i++)
					m += num[i];
				m /= num.length;
				v = 0;
				for(i=0; i<num.length; i++)
					v += (num[i]-m)*(num[i]-m);
					pvar = v/num.length;
			svar = v/(num.length-1);
			pstd = Math.sqrt(pvar);
			sstd = Math.sqrt(svar);
			document.calcform.pstd.value = roundresult(pstd);
			document.calcform.sstd.value = roundresult(sstd);
			document.calcform.pvar.value = roundresult(pvar);
			document.calcform.svar.value = roundresult(svar);
			document.calcform.mean.value = roundresult(m);
			}
			function Calc()
			{
				var avg=0;
				var v=0;
				var sum=0;
				var txt="\u03BC = ";
				var txt1=txt2='';
				for(var i=1; i<=irow+1; i++)
				{
					weight = $("#tbl > tbody > tr:nth-child("+i+") > td:nth-child(1) > input").val();
					weight = parseFloat(weight);
					data = $("#tbl > tbody > tr:nth-child("+i+") > td:nth-child(2) > input").val();
					if( weight>=0 )
					{
						avg+=weight*data;
						sum+=weight;
						txt1+=weight+"\u00D7"+data+"+";
						txt2+=weight+"+";
					}
				}
				avg/=sum;
				var avg0=avg;
				avg = roundnum2(avg,8);
				txt+="("+txt1+") / ("+txt2+") = "+avg;
				txt1='';
				for(var i=1; i<=irow+1; i++)
				{
					weight = $("#tbl > tbody > tr:nth-child("+i+") > td:nth-child(1) > input").val();
					weight = parseFloat(weight);
					data = $("#tbl > tbody > tr:nth-child("+i+") > td:nth-child(2) > input").val();
					if( weight>=0 )
					{
						v+=weight*(data-avg0)*(data-avg0);
						txt1+=weight+"\u00D7("+data+"-"+avg+")\u00B2+";
					}
				}
				v/=sum;
				std=Math.sqrt(v)
				v = roundnum2(v,8);
				std = roundnum2(std,8);
				txt+="\n\u03C3 = \u221A( ("+txt1+") / ("+txt2+") ) = "+std;
				txt=txt.replace(/\u002B\u0029/g,")");
				$("#var").val(v);
				$("#mean").val(avg);
				$("#std").val(std);
				$("#TA1").val(txt);
				$("#row1").show();
				$("#row2").show();
				
			}
			function AddRow()
			{
				$('#tbl > tbody > tr').eq(++irow).after("<tr>\
					<td><input type='number' name='weight[]'></td>\
					<td><input type='number' name='data[]'></td>\
				</tr>");
			}



