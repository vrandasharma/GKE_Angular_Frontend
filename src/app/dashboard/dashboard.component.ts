import { Component, OnInit } from '@angular/core';
import { Hero } from '../hero';
import { HeroService } from '../hero.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: [ './dashboard.component.css' ]
})
export class DashboardComponent implements OnInit {
  heroes: Hero[] = [];
  title1 = "";

  constructor(private heroService: HeroService) {
  
   }

  ngOnInit(): void {
    this.getHeroes();
  }

  getHeroes(): void {
    this.heroService.getHeroes()
      .subscribe(heroes => this.heroes = heroes.slice(1, 5));
  }

  public logClick( value: string ) : void {

		console.group( "Clicked Anchor" );
		console.log( value );
		console.groupEnd();
    // window.open('http://localhost:4200/#/heroes', "_blank");

    const Http = new XMLHttpRequest();
    //const url='http://localhost:4200/#/heroes';
    // const url = encodeURIComponent('http://abc65366273.com/#/ffgy br?res=yuh');
    // const url = 'http://abc65366273.com/%23/ffgy?res=yuh';
    // const url = 'http://localhost:4200/' + encodeURIComponent('#') + '/heroes';
    // const url = 'http://nginx-svc-test.ecom1.joecloudy.com/enrich/#/alpha?param=value';
    // const url = 'http://istio-svc-test.ecom1.joecloudy.com/sv/' + encodeURIComponent('#')+ '/enrichment-admin?enrichmentType=ContentRecommendation&realm=s4All&token=%204dd3a7e0-403e-4214-82ed-0a47534b728f';
    // const url = 'http://34.133.60.56:8080/example';
    const url = 'https://catfact.ninja/fact?max_length=140';
    Http.open("GET", url);
    Http.send();
    Http.onreadystatechange=(e)=>{
    console.log(Http.responseURL)
    var parsedJSON = JSON.parse(Http.responseText);
    this.title1 = parsedJSON.fact;
  }
	}

}
