const endpointBase = "https://fdnd.directus.app";
const personFilter = "filter[id][_eq]=258";

export async function load({ fetch }) {
    const url = `${endpointBase}/items/person?${personFilter}`;
    const res = await fetch(url);
    const { data } = await res.json();

    // pakt het resultaat uit de enige array
    const onlyPerson = data[0];

    const person = {
        ...onlyPerson,
        image: onlyPerson.mugshot_year2
            ? `${endpointBase}/assets/${onlyPerson.mugshot_year2}`
            : null,
    };

    return { person };
}