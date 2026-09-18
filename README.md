# Visitekaartje

## Inhoudsopgave
- Live link
- Installatie
- Beschrijving
- Mockups
- Gebruik van site
- Bronnen
- Designkeuzes
- Kenmerken van site
- Code comventies
- Contributing


## Live link
Bekijk de website live hier --> https://your-tribe-for-life-profile-card-1.netlify.app/

## Installatie

Om de website lokaal te openen:
1. Clone de repository
2. Open de map in je code editor
3. Installeer de dependencies:

`npm install`

4. Start de server:

`npm run dev`

5. Open de localhost link die in de terminal staat aangegeven

## Beschrijving
Dit is mijn persoonlijke visitekaartje website. Op de website staan mijn naam, foto, bio en contactgegevens. De gegevens van mijn visitekaartje worden opgehaald uit Directus API.

## Mockups

### Mobile:
<img width="200" height="500" alt="full size screen profilecard" src="https://github.com/user-attachments/assets/eeaeffa5-6bf1-4a3f-9813-2f95ddc9dbfb" />

### Desktop:
<img width="658" height="453" alt="Screenshot 2026-09-17 at 23 14 55" src="https://github.com/user-attachments/assets/a67d9b35-a160-42e0-aaf5-eefcbe687220" />

## Gebruik van de website

De website is bedoeld om kort te laten zien wie ik ben en hoe je contact met mij kunt opnemen.

- Klik op het FDND-logo om naar de FDND-website te gaan.
- Klik op Github om naar mijn Github profiel te gaan.
- Klik op LinkedIn om naar mijn LinkedIn profiel te gaan.
- Mijn locatie en e-mailadres zijn zichtbaar bij de contactgegevens.

## Bronnen 

- [$props Svelte docs](https://svelte.dev/docs/svelte/$props)
  - Dit gebruikte ik om de data die ik aan een component wou meegegeven te ontvangen en binnen mijn component te hergebruiken of te renderen.
- [Loading data Svelte docs](https://svelte.dev/docs/kit/load)
  - Dit is gebruikt om de load functie te maken waarmee ik mijn gegevens, dus van 1 persoon uit de Directus kon ophalen.
- [+layout routing Svelte docs](https://svelte.dev/tutorial/kit/layouts)
  - Dit hielp mij om beter te begrijpen hoe +layout werkt en hoe de mappenstructuur van SvelteKit in elkaar zit te begrijpen.
- [Runes svelte docs](https://svelte.dev/blog/runes)


## Designkeuzes

Ik heb gekozen voor een donkere roze/bordeaux kleur als achtergrond met een lichtere roze kleur voor onderdelen zoals contactgegevens. Hierdoor ontstaat er verschil tussen de verschillende onderdelen van de pagina.

De website is Mobile-First ontworpen en gebouwd. Op grotere schermen verandert de indeling naar een bredere layout met de bio en profielfoto naast elkaar.

Ik heb ronde vormen gebruikt voor profielfoto en de contactgegevens om de website wat moderner en persoonlijker te maken.

## Kenmerken van de site

De website is gemaakt met SvelteKit en gebruikt data uit de Directus API.

- Data ophalen met een load functie
- Persoonsgegevens ophalen uit Directus
- Svelte $props() gebruiken om data door te geven aan componenten
- Herbruikbare componenten voor nav en footer
- Responsiveness is toegepast door middel van media queries
- De meeste gegevens komen dynamisch uit de API
- De HTML is zo semantisch mogelijk

## Data ophalen

De persoonsgegevens worden met een load functie uit Directus opgehaald. Hierdoor hoef ik de gegevens niet hardcoded in de pagina te zetten.

https://github.com/ahlamad/your-tribe-for-life-profile-card/blob/4f426be3478cf97edf102e559d64ec2066de1166/src/routes/%2Bpage.server.js#L1-L20

## Componenten

De pagina is opgesplitst in onderdelen. Zo zijn de navigatie en footer aparte componenten. Hierdoor blijft de code overzichtelijk en kan ik onderdelen makkelijker opnieuw gebruiken.

## Code conventies

Voor mijn code gebruik ik de afspraken die binnen het project your-tribe-for-life-squadpage zijn gemaakt.

[Code conventies documentatie](https://github.com/Chewsy/your-tribe-for-life-squad-page/issues/22)

## Contributing


