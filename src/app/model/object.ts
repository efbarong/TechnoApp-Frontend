
export class User{
    public idUser       : number;
    public name         : String;
    public username     : String;
}

export class Comment{
    public artist       : Artist;
    public idCommentary : number;
    public content      : String;
    public create       : Date;
    public user         : User;
}

export class Artist{
    public idArtist     : number;
    public name         : String;
    public image        : String;
    public description  : String;
    public categories   : Category;
    public comments     : Array<Comment>;
}

export class Category{
    public idCategory   : number;
    public name         : String;
    public artists      : Array<Artist>;
}
