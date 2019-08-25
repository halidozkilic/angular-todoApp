export class Model{
    user;
    items;

    constructor(){
        this.user="Halid";
        this.items=[
           
            new todoItems("gym",true),
            new todoItems("work",false),
            new todoItems("movie",false),
            new todoItems("book",false)

            
        ];

    }

}

export class todoItems{
    description;
    action;
    
    
    constructor(description,action)
    {
        this.description=description;
        this.action=action;
    }


}