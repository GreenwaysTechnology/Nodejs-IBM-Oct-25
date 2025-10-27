function blockMe(message){
  console.log(message)
}
function greet(){
    console.log('greet')
}
function main(){
  blockMe('start')
  greet()
  blockMe('end')
}
main()