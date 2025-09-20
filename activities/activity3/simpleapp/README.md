# Activity 3
### Elijah Kremer
### 20 Sep 25
### CST391
---

This README.md file is a combination of both READMEs for each application that was build for this activity. PART 1 is for the simpleapp and PART 2 is for the musicapp.

## PART 1

### Summary

This application is a simple app to demonstrate how to use angular. It has a simple UI with two components, info and shop. These components show how to handle page events and make different components appear on a button press. It also shows how to set properties to components and how the UI can manipulate them, such as a text input field.

### Screenshots

Initial application page
![](/activities/activity3/screenshots/simple.png)

Bootstrap table using dev tools to show responsiveness at a small screen.
![](/activities/activity3/screenshots/small_table.png)

Bootstrap table using dev tools to show responsiveness at a large screen.
![](/activities/activity3/screenshots/large_table.png)

Application Page of the name form before name is entered
![](/activities/activity3/screenshots/whatname.png)

Application page after submitting the first form
![](/activities/activity3/screenshots/name.png)

Screenshot of the dev tools console after clicking buy.
![](/activities/activity3/screenshots/quantity.png)


### Research Questions

1. Describe @Input decorator used in info.component.ts

The @Input decorator in `info.component.ts` allows the component to receive data from its parent component. In the info component's case, it is used for the name property which means the parent component can pass a value to `info.component.ts`. Name is a dynamically set property from the outside component. It is done like this:

```html
<app-info [name]="'Han Solo'"></app-info>
```

2. Describe [value] used in info.component.html

The `[value]` in `info.component.ts` is a binding used in Angular to set an element's value dynamically. Take this for example: `<input [value]="selectedProduct">` The value of this input field is bound to the `selectedProduct` property in the component. When `selectedProduct` changes, the input field will updated automatically. Changes by the user to the input field won't update`selectedProduct` unless another binding method like `[(ngModel)]` is used.


3. Describe [(ngModel)] also used in info.component.html

The `[(ngModel)]` in `info.component.hmtl` enables two-way data binding. This means that changes in the UI will update the component property, and vice versa. Here is an example: `<input [(ngModel)]="quantity">`. This will bind the input field to the `quantity` property within the component. When a user types in a new value the property in the component will change and when the value is updated within the code then the UI will reflect those changes.

## PART 2

### Summary

This portion of the activity focuses on developing a front‑end Angular application that integrates multiple components and manages user‑driven page events. It loads data from a JSON file and binds it across several views, enabling users to both explore existing records and add new entries for display. The work builds on the foundational concepts introduced in Part 1, extending them into a richer, more interactive interface.

### Screenshots

Initial application page
![](/activities/activity3/screenshots/initial_page.png)

---

GCU Homepage
![](/activities/activity3/screenshots/gcu.png)

The create albums page
![](/activities/activity3/screenshots/create.png)

---

Screenshot of the artist page showing the newly created artist
![](/activities/activity3/screenshots/newartist.png)

---

Screenshot of the new album on the albums page.
![](/activities/activity3/screenshots/newAlbum.png)

---

Screenshot of the alert box showing the version number.
![](/activities/activity3/screenshots/versionNumber.png)

---

### Commented Code of Music Service File

```typeScript
import { Injectable } from '@angular/core';
import exampledata from '../../data/sample-music-data.json';
import { Artist } from './../models/artists.model';
import { Album } from '../models/albums.model';

// Marks this service as injectable at the root level
@Injectable({ providedIn: 'root' })
export class MusicServiceService {

  // Stores the list of albums loaded from JSON data
  albums: Album[] = exampledata;

  /**
   * Retrieves a list of unique artists from the album data
   * @returns An array of Artist objects
   */
  public getArtists(): Artist[] {
    let artists: Artist[] = [];
    let artistSet = new Set<string>(); // Using a Set to ensure uniqueness

    // Add each album's artist to the set
    this.albums.forEach(a => artistSet.add(a.artist));

    // Convert the set into an array of Artist objects
    artistSet.forEach(a => artists.push({artist: a}))
    return artists;
  }

  /**
   * Retrieves the list of all albums
   * @returns An array of Album objects
   */
  public getAlbums(): Album[] {
    return this.albums;
  }

  /**
   * Retrieves all albums by a specific artist
   * @param artistName - The name of the artist
   * @returns An array of Album objects associated with the artist
   */
  public getAlbumsOfArtist(artistName: String): Album[] {
    let albums: Album[] = [];

    // Filter albums belonging to the given artist
    this.albums.forEach(album => {
      if (album.artist == artistName) {
        albums.push(album);
      }
    });
    return albums;
  }

  /**
   * Adds a new album to the list
   * @param album - The Album object to be added
   * @returns A success indicator (1 for success)
   */
  public createAlbum(album: Album): number {
    this.albums.push(album);
    return 1;
  }

  /**
   * Updates an existing album in the list
   * @param album - The Album object with updated details
   * @returns A status code (0 for success, -1 if not found)
   */
  public updateAlbum(album: Album): number {
    for (let i = 0; i < this.albums.length; ++i) {
      if (this.albums[i].id == album.id) {
        this.albums.splice(i, 1, album); // Replace the album in the list
        return 0;
      }
    }
    return -1; // Album not found
  }

  /**
   * Deletes an album from the list by its ID
   * @param id - The ID of the album to delete
   * @returns A status code (0 for success, -1 if not found)
   */
  public deleteAlbum(id: number): number {
    for (let i = 0; i < this.albums.length; ++i) {
      if (this.albums[i].id == id) {
        this.albums.splice(i, 1); // Remove the album from the list
        return 0;
      }
    }
    return -1; // Album not found
  }
}

```
##  About This Project

**My Music Collection** is a front‑end Angular application built as part of CST‑391 Activity 3.  
It demonstrates key Angular concepts including:

- **Component‑based architecture** – multiple reusable components for artists, albums, and CRUD operations.
- **Routing & navigation** – seamless transitions between views using Angular Router.
- **Data binding & event handling** – dynamic UI updates in response to user actions.
- **Mock data integration** – loads and displays album and artist information from a local JSON file.
- **Bootstrap styling** – responsive, mobile‑friendly layout with a clean, modern look.

Users can:
- Browse a list of artists and their albums.
- View detailed album information.
- Create, edit, and delete albums.
- Experience a structured, interactive UI that builds on concepts from earlier activities.

This project expands on the foundational Angular skills introduced in Part 1, applying them to a richer, multi‑view application with real‑world patterns.

## Conclusion

This activity offered practical, step‑by‑step experience in developing Angular applications, with an emphasis on component interaction, data binding, and event handling. In Part 1, we explored Angular fundamentals through a simple application that demonstrated passing data between components, updating the UI dynamically, and responding to user actions. Part 2 built on this foundation by creating a more sophisticated music application that incorporated JSON‑based mock data, multiple routed views, and full CRUD functionality for managing artists and albums.
