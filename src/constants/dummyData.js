/* eslint-disable prettier/prettier */
import { backarrow_grey, cycling_icon, down_arrow, forwardarrow_grey, hub1, hub2, hub3, hub4, hub5, popcorn_dummy, run_icon, swimming_icon, walk_icon } from '../assets';

export const hubData = [{ id: 0, image: hub1, title: 'A Guide to Eating a Balanced Diet', coachName: 'Dietitian Joanne', time: '15 Min' }, { id: 1, image: hub2, title: 'Healthy and Easy Breakfast Recipes', coachName: 'DietHub', time: '1 Hour' }, { id: 2, image: hub3, title: 'Creative Salad Ideas', coachName: 'DietHub', time: '1 Day' }, { id: 3, image: hub4, title: 'Baked Eggs with Spinach and Tomato', coachName: 'Dietitian Joanne', time: '15 Min' }, { id: 4, image: hub5, title: 'How to Choose the Right Carbs', coachName: 'DietiHub', time: '15 Min' }];

export const dates = [{ id: 0, image: backarrow_grey, title: "Yesterday" }, { id: 1, title: "Today", count: "Day 1" }, { id: 2, image: forwardarrow_grey, title: "Tommorow", count: "Day 2" }]

export const dashData = [{ id: 0, image: popcorn_dummy, item_number: 2, title: "Piece of chicken", desc: "Grilled with no skin" }, { id: 1, image: popcorn_dummy, item_number: 3, title: "Mexi-Egg Wrap", desc: "Scramble one egg and one egg white with beans" }, { id: 2, image: popcorn_dummy, item_number: 1, title: "Tomato baked eggs", desc: "Eggs over tomato for a change" }, { id: 3, image: popcorn_dummy, item_number: 2, title: "Banana bread", desc: "Healthy banana loaf - perfect for breakfast" }, { id: 4, image: popcorn_dummy, item_number: 2, title: "Low-sugar marmalade", desc: "A healthy version of the classic breakfast" }, { id: 5, image: popcorn_dummy, item_number: 1, title: "Melon & crunchy bran pots", desc: "Not just for breakfast, this healthy pot of yoghurt" }];

export const dietData = [{ id: 0, title: 'Snack', image: down_arrow }, { id: 1, title: 'Lunch', image: down_arrow }, { id: 2, title: 'Snack', image: down_arrow }, { id: 3, title: 'Dinner', image: down_arrow }];

export const cupData = [{ id: 0, number: 1, completed: true }, { id: 1, number: 2, completed: true }, { id: 2, number: 3, completed: true }, { id: 3, number: 4, completed: false }, { id: 4, number: 5, completed: false }, { id: 5, number: 6, completed: 'not started' }, { id: 6, number: 7, completed: 'not started' }];

export const ExcerciseData = [{ id: 0, image: walk_icon, time: 30, title: 'Walk', completed: true }, { id: 1, image: run_icon, title: 'Run', time: 20, completed: false }, { id: 2, image: cycling_icon, title: 'Bike', time: 45, completed: false }, { id: 3, image: swimming_icon, title: 'Other', time: 15, completed: 'not started' }]
