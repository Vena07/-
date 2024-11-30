import { boolean, date } from 'drizzle-orm/mysql-core';
import { sqliteTable, text, integer } from 'drizzle-orm/sqlite-core';

export const user = sqliteTable('trida', {
	id_trida: integer('id_trida').primaryKey(),
	nazev: text('nazev')
});

export const zak = sqliteTable('zak', {
	jmeno: text('jmeno').primaryKey(),
	id_studenta: integer('id_absence'),
	id_trida: integer('id_trida'),
	id_absence: integer('id_absence')
});

export const absence = sqliteTable('absence', {
	id_absence: integer('id_absence').primaryKey(),
	duvod: text('duvod'),
	datum: date('datum'),
	omluvena: boolean('omluvena')
	
});

export const rozvrh = sqliteTable('rozvrh', {
	id_rozvrh: integer('id_rozvrh').primaryKey(),
	id_trida: integer('id_trida'),
	den: text("den"),
	one_hodina: text('one_hodina'),
	two_hodina: text('two_hodina'),
	three_hodina: text('three_hodina'),
	four_hodina: text('four_hodina'),
	five_hodina: text('five_hodina')
});