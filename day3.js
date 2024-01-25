// Switch case
let num=1 ;
switch(num)
{
    case 1:
    {
        console.log("super user");
        break;
    }

    case 2:
        {
            console.log("medium user");
            break;
        }

    default:
        {
            console.log("lower level user");
        }
}


// ternary

let age=2;
let votestatus=age>=18 ? 1 : 2;
console.log(votestatus);


// loops while do while for loop

 let a=1;
while(a<=10 )
{
    console.log(a*5);
    a++;
}


// DO WHILE LOOP


// let h=1;
// do
// {
//     console.log("letsupgrade"+h);
//     h++;
// }
// while(h<=10);

// for loop


for( let h=1 ; h<=10 ; h++)
{
    if(h%2!=0)
    {
        console.log(h+ " is odd");
    }
    else
    {
        console.log(h+" is even")
    }
}

for( let h=1 ; h<=10 ; h++)
{
    if(h%2  ==0)
    {
        // break;
        continue;
    }
    console.log(h);
}
console.log("out")


// ARRAY COLLECTION OF ELEMENTS/DATA OF SAME TYPE STORED IN A SINGLE VARIABLE

let cities=["kota","ardi","giiyar","saligrama"];
cities[3]="sasthana";
for(let i1=0;i1<cities.length;i1++)
{
    console.log(cities[i1]);
}

// OBJECTS



    let numm=[1,12,5,88,76,2];
    let target=7;

    for(let i=0;i<numm.length;i++)
    {
        for(let j=i+1;j<numm.length;j++)
        {
            if(numm[i]+numm[j]===target)
            {
                console.log(i,j)
            }

        }
    }
    // let numm=[1,2,5,88,76];
    // let target=7;

    // for(let i=0;i<numm.length;i++)
    // {
    //     for(let j=i+1;j<numm.length;j++)
    //     {
    //         if(numm[i]+numm[j]===target)
    //         {
    //             console.log(i,j)
    //         }

    //     }
    // }


    let dup=[6,8,9,88,90,118,118,99];
    // for(let i=0;i<dup.length;i++)
    // {
    //     for(let j=i+1;j<dup.length;j++)
    //     {
    //         if(dup[i]===dup[j])
    //         {
    //             // console.log(dup[i],dup[j])
    //             console.log("true")
    //         }
    //         // else
    //         // {
    //         //     console.log("false")
    //         // }
    //     }
        
    // }
    
        function duplicate(dup){
        let memory={};
        for(let i=0;i<dup.length;i++)
        {
            if(memory[dup[i]]===undefined)
            {
                memory[dup[i]]="haha"
            }else{
                return true
            }
        }
        return false
        }

        console.log(duplicate([1,6,7,16]))


// function fname(num,ind)
// {
//     for(let i=0;i<num.length;i++)
//     {
//         for(let j=i+1;j<num.length;j++)
//         {
//             if(num[i]+num[j]===ind)  return(i,j)

//         }
//     }

// }

// fname([1,3,5,7,88],6)
