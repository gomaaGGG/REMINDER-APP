import {ADD_REMINDER} from '../types'
import {REMOVE_REMINDER} from '../types'
import {CLEAR_REMINDERS} from '../types'

export const add_reminder=(text,date)=>{
const action ={
type:ADD_REMINDER,
text,
date


}
console.log("add",action)
return action

}


export const remove_reminder=(id)=>{
    const action ={
    type:REMOVE_REMINDER,
    id:id
    }
    console.log("remove",action)
    return action
    
    }


    export const clear_reminders=()=>{
        const action ={
        type:CLEAR_REMINDERS,
      
        }
        console.log("clear",action)
        return action
        
        }