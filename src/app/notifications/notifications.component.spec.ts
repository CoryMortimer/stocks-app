import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { By } from '@angular/platform-browser';

import { NotificationsComponent } from './notifications.component';
import { NotificationsModule } from './notifications.module';

describe('NotificationsComponent', () => {
  let component: NotificationsComponent;
  let fixture: ComponentFixture<NotificationsComponent>;

  function clearNumberOfNotifications() {
    const bellDebugIcon = fixture.debugElement.query(By.css('button'));
    bellDebugIcon.triggerEventHandler('click', null);
    expect(component.numberOfNotifications).toBe(0, `Notifications equal ${component.numberOfNotifications}`);
    expect(component.notifications.length).toBe(1, `Length is ${component.notifications.length}`);
  }

  function clearNotifications() {
    const bellDebugIcon = fixture.debugElement.query(By.css('button'));
    bellDebugIcon.triggerEventHandler('click', null);
    expect(component.notifications.length).toBe(0, `Length is ${component.notifications.length}`);
  }

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        NotificationsModule,
        NoopAnimationsModule
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NotificationsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should click the notification icon and clear the number of notifications', () => {
    clearNumberOfNotifications();
  });

  it('should click the notification icon and clear the number of notifications then the notifications', () => {
    clearNumberOfNotifications();
    clearNotifications();
  });
});
