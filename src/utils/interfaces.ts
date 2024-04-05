export interface Species {
    id?:             string;
    name?:            string;
    classification?:  string;
    designation?:     string;
    averageHeight?:   string;
    skinColors?:      string;
    hairColors?:      string;
    eyeColors?:       string;
    averageLifespan?: string;
    homeWorld?:       string;
    language?:        string;
    people?:          string[];
    films?:           string[];
    url?:             string;
    created?:         string;
    edited?:          string;
}

export interface Planet {
    id?:             string,
    name:            string,
    diameter:        string,
    rotation_period: string,
    orbital_period:  string,
    gravity:         string,
    population:      string,
    climate:         string,
    terrain:         string,
    surface_water:   string,
    residents:       string[],
    films:           string[],
    url:             string,
    created:         string,
    edited:          string,
}