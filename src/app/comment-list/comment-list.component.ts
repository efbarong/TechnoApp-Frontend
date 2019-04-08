import { Component, OnInit } from "@angular/core";
import { Comment, Artist } from "../model/object";
import { Router } from "@angular/router";
import { UserInformationService } from "../services/user-information.service";
import { CommentService } from "../services/comment.service";

@Component({
  selector: "app-comment-list",
  templateUrl: "./comment-list.component.html",
  styleUrls: ["./comment-list.component.css"]
})
export class CommentListComponent implements OnInit {
  myArtist: Artist;
  myComments: Array<Comment>;
  myComment: Comment;

  constructor(
    private userInfo: UserInformationService, private router: Router, private commentService: CommentService) { 
    this.myComments = new Array();
    this.myComment = new Comment();
    this.myComment.user = userInfo.getUser();
    this.myArtist = this.commentService.artist;
    this.myComments = this.myArtist.comments;

    console.log("Hello");
    
    console.log(this.myArtist);
    
    // this.commentService
    //   .getAllCommentsByArtist(this.myArtist)
    //   .subscribe(comentarios => {
    //     this.myComments = comentarios;
    //     console.log(this.myComments);
    //   });
  }

  ngOnInit() {}

  addNewComment() {
    console.log("add comment");
    this.commentService.insertComment(this.myComment);
    this.myComment = new Comment();
  }

  logout() {
    this.userInfo.logout();
    this.router.navigateByUrl("/login");
  }

  getAllComments() {

  }
}
