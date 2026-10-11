import { describe, expect, it } from 'vitest';
import { business, services } from '../lib/speed-motors-data';
describe('Speed Motors requirements', () => {
 it('offers the twelve requested services', () => { expect(services).toHaveLength(12); expect(services[0].title).toBe('Periodic Maintenance & General Service'); expect(services[11].title).toBe('Engine Diagnostics & Performance Tuning'); });
 it.each(services)('$title has a fifteen-word description', service => { expect(service.description.split(/\s+/)).toHaveLength(15); });
 it('keeps CTA destinations as placeholders', () => expect(business.ctaHref).toBe('#'));
 it('retains the specified working hours', () => expect(business.hours).toBe('Monday to Saturday: 9:00 AM – 6:30 PM'));
});
