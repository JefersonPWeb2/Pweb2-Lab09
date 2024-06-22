import { TestBed } from '@angular/core/testing';
import { PalabrasService } from './palabras.service';

describe('PalabrasService', () => {
  let service: PalabrasService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PalabrasService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should return an array of words', () => {
    const palabras = service.getPalabras();
    expect(Array.isArray(palabras)).toBe(true);
    expect(palabras.length).toBeGreaterThan(0);
  });

  it('should return a random word from the list', () => {
    const palabra = service.getPalabraAleatoria();
    expect(service.getPalabras()).toContain(palabra);
  });

  it('should update current word and reset attempts', () => {
    const initialPalabra = service.palabraActual;
    service.nuevaPalabra();
    expect(service.getPalabras()).toContain(service.palabraActual);
    expect(service.palabraActual).not.toEqual(initialPalabra);
    expect(service.intentos).toEqual(6); 
  });

  it('should decrease attempts when incorrect letter is guessed', () => {
    const initialIntentos = service.intentos;
    service.adivinar('x'); // Suponiendo que 'x' no esté en la palabra actual
    expect(service.intentos).toBeLessThan(initialIntentos);
  });

  it('should not decrease attempts when correct letter is guessed', () => {
    const initialIntentos = service.intentos;
    const primeraLetra = service.palabraActual.charAt(0);
    service.adivinar(primeraLetra);
    expect(service.intentos).toEqual(initialIntentos);
  });

  it('should return true when game is over', () => {
    service.intentos = 0;
    expect(service.juegoTerminado()).toBe(true);
  });

  it('should return false when game is not over', () => {
    service.intentos = 1;
    expect(service.juegoTerminado()).toBe(false);
  });
});
