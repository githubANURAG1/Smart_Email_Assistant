import { ComponentFixture, TestBed } from '@angular/core/testing';
import { GenerateReplyComponent } from './generate-reply.component';


describe('GenerateReplyComponent', () => {
  let component: GenerateReplyComponent;
  let fixture: ComponentFixture<GenerateReplyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GenerateReplyComponent ]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(GenerateReplyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
