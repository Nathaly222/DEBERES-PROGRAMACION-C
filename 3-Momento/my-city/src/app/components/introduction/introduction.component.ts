import { Component, OnInit } from '@angular/core';
import { NzTypographyModule } from 'ng-zorro-antd/typography';
import { NzCardModule } from 'ng-zorro-antd/card';
import { CommonModule } from '@angular/common';
import { Citizen } from '../../models/citizen.model';
import { CitizenService } from '../../services/citizen.service';
import { Citizen1Service } from '../../services/citizen1.service';
import { Citizen2Service } from './../../services/citizen2.service';
import { Citizen3Service } from '../../services/citizen3.service';
import { DoctorService } from './../../services/doctor.service';
import { EnginnerService } from '../../services/enginner.service';
import { MayorService } from '../../services/mayor.service';
import { Mayor2Service } from '../../services/mayor2.service';
import { PoliceService } from '../../services/police.service';
import { Police1Service } from '../../services/police1.service';
import { StudentService } from '../../services/student.service';
import { Student1Service } from './../../services/student1.service';
import { Students2Service } from '../../services/students2.service';
import { TeacherService } from '../../services/teacher.service';

@Component({
  selector: 'app-introduction',
  standalone: true,
  imports: [CommonModule, NzCardModule, NzTypographyModule],
  templateUrl: './introduction.component.html',
  styleUrls: ['./introduction.component.css']
})
export class IntroductionComponent implements OnInit {
  citizens: { [key: string]: Citizen } = {};
  dayMessages: { [key: string]: string } = {};
  roleMessages: { [key: string]: string } = {};
  ageMessages: { [key: string]: number | string } = {};
  storyVisible: { [key: string]: boolean } = {};
  storyMessages: { [key: string]: string } = {};

  objectKeys = Object.keys;

  constructor(
    private citizenService: CitizenService,
    private citizen1Service: Citizen1Service, 
    private citizen2Service: Citizen2Service,
    private citizen3Service: Citizen3Service,
    private doctorService: DoctorService,
    private enginnerService: EnginnerService,
    private mayorService: MayorService,
    private mayor2Service: Mayor2Service, 
    private policeService: PoliceService,
    private police1Service: Police1Service,
    private studentsService: StudentService,
    private student1Service: Student1Service,
    private student2Service: Students2Service, 
    private teacherService: TeacherService
  ) {}

  ngOnInit(): void {
  this.initializeCitizen('citizen', this.citizenService, 'Un día, Aliec se encontró con el doctor en el parque. Juntos decidieron visitar al alcalde para discutir mejoras en la ciudad.');
  this.initializeCitizen('citizen1', this.citizen1Service, 'Bob estaba trabajando en un nuevo proyecto con el ingeniero cuando escucharon sobre la reunión en el parque. Decidieron unirse para ofrecer sus ideas.');
  this.initializeCitizen('citizen2', this.citizen2Service, 'Diana, siendo maestro, pensó que sería bueno involucrar a los estudiantes en las mejoras. Llevó a algunos de ellos al parque.');
  this.initializeCitizen('citizen3', this.citizen3Service, 'Romeo Santos  estaba documentando todo lo que sucedía. Creía que era importante que todos los ciudadanos supieran sobre las decisiones importantes.');
  this.initializeCitizen('doctor', this.doctorService, 'Charlie estaba preocupado por la salud pública y quería asegurarse de que cualquier cambio en la ciudad beneficiara el bienestar de todos.');
  this.initializeCitizen('enginner', this.enginnerService, 'Tom tenía ideas innovadoras para mejorar la infraestructura de la ciudad. Estaba emocionado de compartir sus planes.');
  this.initializeCitizen('mayor', this.mayorService, 'Abdala escuchó atentamente a todos los ciudadanos. Quería asegurarse de que las mejoras fueran inclusivas y beneficiosas para todos.');
  this.initializeCitizen('mayor2', this.mayor2Service, 'Daniel alcalde ayudó a organizar los recursos y coordinar las acciones necesarias para implementar las ideas discutidas.');
  this.initializeCitizen('police', this.policeService, 'David  se aseguró de que la reunión fuera segura y ordenada. También ofreció sugerencias sobre cómo mejorar la seguridad en la ciudad.');
  this.initializeCitizen('police1', this.police1Service, 'Paul policía colaboró con los ciudadanos para identificar áreas problemáticas en la ciudad que necesitaban atención inmediata.');
  this.initializeCitizen('students', this.studentsService, 'Leonardo estaban entusiasmados por participar. Tenían muchas ideas creativas para hacer de la ciudad un lugar mejor.');
  this.initializeCitizen('students1', this.student1Service, 'Dwayne y otro grupo de estudiantes trabajó en un proyecto sobre la sostenibilidad y presentaron sus ideas durante la reunión.');
  this.initializeCitizen('students2', this.student2Service, 'Brad trajeron modelos y prototipos para mostrar cómo podrían implementarse las ideas.');
  this.initializeCitizen('teacher', this.teacherService, 'Vin guiaba a los estudiantes y aseguraba que sus voces fueran escuchadas durante la reunión.');

  }

  private initializeCitizen(key: string, service: any, story: string): void {
    const citizen = service.getCitizen();
    this.citizens[key] = citizen;
    this.dayMessages[key] = service.livesCharacter();
    this.roleMessages[key] = service.roleCharacter();
    this.ageMessages[key] = service.ageCharacter();
    this.storyVisible[key] = true; 
    this.storyMessages[key] = story;
  }

  showStory(key: string) {
    this.storyVisible[key] = !this.storyVisible;
  }
}
