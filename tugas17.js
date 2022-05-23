var str = "Saya beLajar bahaSa peMrograman deNgan khUsuk"
console.log(str.toLowerCase())
console.log(str.toUpperCase())

var str2 = "Allen SedAng MemAncinG IkaN di SuNgai, DIA MEndapat IkAN GaBuS 3 Ekor dan LanGsuNg Dijual."
console.log(str2.toLowerCase())
console.log(str2.toUpperCase())

var lorem = "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."
var tampung = []
for (var x = 0; x < 6; x++) 
{
    tampung.push(lorem.charCodeAt(x))
}
console.log(tampung.join("-"))