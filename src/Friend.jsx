export default function Friend({friend}){
 const {name,email} = friend;
   return(
    <div className="box">
    <h4>name :{name} </h4>
    <h4> email :{email} </h4>
</div>

   )
}