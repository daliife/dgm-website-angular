import { InfoField } from '../../models/infoField.model';
import { Injectable } from '@angular/core';

@Injectable()
export class AboutService {
  private works: InfoField[] = [
    new InfoField('Junior Engineer (SA)', 'Everis', 'Oct. 2019 - Present', 'https://www.everis.com/spain/es/'),
    new InfoField('Unity Programmer internship', 'Everis', 'Feb. 2019 - Jul. 2019', 'https://www.everis.com/spain/es/'),
    new InfoField('Multimedia Programmer', 'Rücker Lypsa', 'Oct. 2017 - Dec. 2017', 'https://www.rueckerlypsa.es/'),
    new InfoField('Helpdesk IT', 'Wanup', 'July 2017 - Sept. 2017', 'https://www.rueckerlypsa.es/'),
    new InfoField('Animation internship', 'Campus La Salle', 'Sept. 2016 - May 2017', 'https://www.salleurl.edu/ca'),
    new InfoField('Sound Technician', 'Casa Orlandai', 'Sept. 2012 - May 2013', 'https://casaorlandai.cat')
  ];

  private education: InfoField[] = [
    new InfoField(
      'Masters in Advanced Videogame Development',
      'Campus La Salle',
      'Oct. 2018 - July 2019',
      'https://www.salleurl.edu/ca/estudis/master-en-desenvolupament-avancat-de-videojocs'
    ),
    new InfoField(
      'Multimedia Engineering Degree',
      'Campus La Salle',
      'Sept. 2013 - June 2018',
      'https://www.salleurl.edu/ca/estudis/grau-en-enginyeria-multimedia-mencio-en-videojocs'
    ),
    new InfoField(
      'Sound Technician',
      'EMAV',
      'Sept. 2011 - June 2013',
      'https://www.emav.com/oferta-educativa/cicles-formatius-de-grau-superior/so/'
    )
  ];

  private languages: InfoField[] = [
    new InfoField('Catalan', 'Bilingual or native competence', ' ', ' '),
    new InfoField('Spanish', 'Bilingual or native competence', ' ', ' '),
    new InfoField('English', 'Profesional competence', ' ', ' ')
  ];

  getEducation(): InfoField[] {
    return this.education;
  }

  getWorks(): InfoField[] {
    return this.works;
  }

  getLanguages(): InfoField[] {
    return this.languages;
  }
}
