import { getUserName } from "../getUserProjects";

function toNames(id:Array<number> ):Array<string> {
    const response = iterateNames(id)
return response
  }
 function iterateNames(id:Array<number> ):Array<string>  {
     const newNames:Array<string> = []
     if(Array.isArray(id)) {
        id.map(async (id) => {
            const name = await getUserName(id);
            newNames.push(name );
        })
    }
return newNames
  }
  export {toNames}