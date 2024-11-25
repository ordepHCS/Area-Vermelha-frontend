import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { RankingService } from '../../services/ranking.service';

@Component({
  selector: 'app-ranking',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './ranking.component.html',
  styleUrls: ['./ranking.component.scss']
})
export class RankingComplaintsComponent implements OnInit {
  rankings: any[] = [];

  constructor(private rankingService: RankingService) {}

  ngOnInit(): void {
    this.rankingService.getRanking().subscribe(data => {
      this.rankings = data;
    });
  }
}
