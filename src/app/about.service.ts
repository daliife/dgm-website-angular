import { InfoField } from './infoField';

export class AboutService{

    works:InfoField[] = [
      new InfoField("Multimedia Programmer","Rücker Lypsa","Oct. 2017 - Dec. 2017","https://www.rueckerlypsa.es/"),
      new InfoField("Helpdesk IT","Wanup","July 2017 - Sept. 2017","https://www.rueckerlypsa.es/"),
      new InfoField("Animation internship","Campus La Salle","Sept. 2016 - May 2017","https://www.salleurl.edu/ca"),
      new InfoField("Sound Technician","Casa Orlandai","Sept. 2012 - May 2013","https://casaorlandai.cat")
    ];

    education:InfoField[] = [
      new InfoField("Masters in Advanced Videogame Development","Campus La Salle","Oct. 2018 - Present","https://www.salleurl.edu/ca"),
      new InfoField("Multimedia Engineering Degree","Campus La Salle","Sept. 2013 - June 2018","https://www.salleurl.edu/ca"),
      new InfoField("Sound Technician","EMAV","Sept. 2011 - June 2013","http://www.emav.com/"),
    ];

    languages:InfoField[] = [
      new InfoField("Catalan","Bilingual or native competence"," "," "),
      new InfoField("Spanish","Bilingual or native competence"," "," "),
      new InfoField("English","Profesional competence"," "," "),
    ];

  getEducation() : InfoField[]{
    return this.education;
  }

  getWorks() : InfoField[]{
    return this.works;
  }

  getLanguages() : InfoField[]{
    return this.languages;
  }

}
