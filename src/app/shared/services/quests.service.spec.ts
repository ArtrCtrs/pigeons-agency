import { TestBed } from '@angular/core/testing';

import { QuestsService } from './quests.service';

describe('QuestsService', () => {
    beforeEach(() => TestBed.configureTestingModule({}));

    it('should be created', () => {
        const service: QuestsService = TestBed.get(QuestsService);
        expect(service).toBeTruthy();
    });
});
