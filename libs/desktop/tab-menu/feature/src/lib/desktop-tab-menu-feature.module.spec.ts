import { async, TestBed } from '@angular/core/testing';
import { DesktopTabMenuFeatureModule } from './desktop-tab-menu-feature.module';

describe('DesktopTabMenuFeatureModule', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [DesktopTabMenuFeatureModule]
    }).compileComponents();
  }));

  it('should create', () => {
    expect(DesktopTabMenuFeatureModule).toBeDefined();
  });
});
