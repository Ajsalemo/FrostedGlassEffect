package com.server.api.entities;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name = "specifications")
public class Specifications {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer id;
    private String year;
    private String engine;
    private String fuel_system;
    private String engine_alignment;
    private String engine_position;
    private Integer engine_valves;
    private String engine_displacement;
    private String engine_horsepower;
    private String bore_stroke;
    private String aspriation;
    private String compression_ratio;
    private String max_torque;
    private String transmission_offered;
    private String fuel_economy_combined;
    private String fuel_economy_highway;
    private String fuel_econony_city;
    private String fuel_range;
    private String fuel_capacity;
    private String co2_emissions;
    private String top_speed;
    private String accelerations_0_60;
    private String drivetain;
    private String body;
    private String width;
    private String height;
    private String length;
    private String front_axle;
    private String rear_axle;
    private String front_brakes_disc_type;
    private String rear_brakes_disc_type;
    private Integer drag_coefficient;
    private String front_rims_dimensions;
    private String rear_rims_dimensions;
    private String front_wheels_width;
    private String rear_wheels_width;
    private String turning_radius;
    private String weight_power_output;
    private String trunk_capacity;
    private String curb_weight;
    private String wheelbase;
    private String steering_type;
    private String front_suspension;
    private String rear_suspension;
    private Integer number_of_seats;
    private Integer number_of_doors;
    private String generation;

    public Integer getId() {
        return id;
    }

    public void setId(Integer id) {
        this.id = id;
    }

    public String getYear() {
        return year;
    }

    public void setYear(String year) {
        this.year = year;
    }

    public String getEngine() {
        return engine;
    }

    public void setEngine(String engine) {
        this.engine = engine;
    }

    public String getFuel_system() {
        return fuel_system;
    }

    public void setFuel_system(String fuel_system) {
        this.fuel_system = fuel_system;
    }

    public String getEngine_alignment() {
        return engine_alignment;
    }

    public void setEngine_alignment(String engine_alignment) {
        this.engine_alignment = engine_alignment;
    }

    public String getEngine_position() {
        return engine_position;
    }

    public void setEngine_position(String engine_position) {
        this.engine_position = engine_position;
    }

    public Integer getEngine_valves() {
        return engine_valves;
    }

    public void setEngine_valves(Integer engine_valves) {
        this.engine_valves = engine_valves;
    }

    public String getEngine_displacement() {
        return engine_displacement;
    }

    public void setEngine_displacement(String engine_displacement) {
        this.engine_displacement = engine_displacement;
    }

    public String getEngine_horsepower() {
        return engine_horsepower;
    }

    public void setEngine_horsepower(String engine_horsepower) {
        this.engine_horsepower = engine_horsepower;
    }

    public String getBore_stroke() {
        return bore_stroke;
    }

    public void setBore_stroke(String bore_stroke) {
        this.bore_stroke = bore_stroke;
    }

    public String getAspriation() {
        return aspriation;
    }

    public void setAspriation(String aspriation) {
        this.aspriation = aspriation;
    }

    public String getCompression_ratio() {
        return compression_ratio;
    }

    public void setCompression_ratio(String compression_ratio) {
        this.compression_ratio = compression_ratio;
    }

    public String getMax_torque() {
        return max_torque;
    }

    public void setMax_torque(String max_torque) {
        this.max_torque = max_torque;
    }

    public String getTransmission_offered() {
        return transmission_offered;
    }

    public void setTransmission_offered(String transmission_offered) {
        this.transmission_offered = transmission_offered;
    }

    public String getFuel_economy_combined() {
        return fuel_economy_combined;
    }

    public void setFuel_economy_combined(String fuel_economy_combined) {
        this.fuel_economy_combined = fuel_economy_combined;
    }

    public String getFuel_economy_highway() {
        return fuel_economy_highway;
    }

    public void setFuel_economy_highway(String fuel_economy_highway) {
        this.fuel_economy_highway = fuel_economy_highway;
    }

    public String getFuel_econony_city() {
        return fuel_econony_city;
    }

    public void setFuel_econony_city(String fuel_econony_city) {
        this.fuel_econony_city = fuel_econony_city;
    }

    public String getFuel_range() {
        return fuel_range;
    }

    public void setFuel_range(String fuel_range) {
        this.fuel_range = fuel_range;
    }

    public String getFuel_capacity() {
        return fuel_capacity;
    }

    public void setFuel_capacity(String fuel_capacity) {
        this.fuel_capacity = fuel_capacity;
    }

    public String getCo2_emissions() {
        return co2_emissions;
    }

    public void setCo2_emissions(String co2_emissions) {
        this.co2_emissions = co2_emissions;
    }

    public String getTop_speed() {
        return top_speed;
    }

    public void setTop_speed(String top_speed) {
        this.top_speed = top_speed;
    }

    public String getAccelerations_0_60() {
        return accelerations_0_60;
    }

    public void setAccelerations_0_60(String accelerations_0_60) {
        this.accelerations_0_60 = accelerations_0_60;
    }

    public String getDrivetain() {
        return drivetain;
    }

    public void setDrivetain(String drivetain) {
        this.drivetain = drivetain;
    }

    public String getBody() {
        return body;
    }

    public void setBody(String body) {
        this.body = body;
    }

    public String getWidth() {
        return width;
    }

    public void setWidth(String width) {
        this.width = width;
    }

    public String getHeight() {
        return height;
    }

    public void setHeight(String height) {
        this.height = height;
    }

    public String getLength() {
        return length;
    }

    public void setLength(String length) {
        this.length = length;
    }

    public String getFront_axle() {
        return front_axle;
    }

    public void setFront_axle(String front_axle) {
        this.front_axle = front_axle;
    }

    public String getRear_axle() {
        return rear_axle;
    }

    public void setRear_axle(String rear_axle) {
        this.rear_axle = rear_axle;
    }

    public String getFront_brakes_disc_type() {
        return front_brakes_disc_type;
    }

    public void setFront_brakes_disc_type(String front_brakes_disc_type) {
        this.front_brakes_disc_type = front_brakes_disc_type;
    }

    public String getRear_brakes_disc_type() {
        return rear_brakes_disc_type;
    }

    public void setRear_brakes_disc_type(String rear_brakes_disc_type) {
        this.rear_brakes_disc_type = rear_brakes_disc_type;
    }

    public Integer getDrag_coefficient() {
        return drag_coefficient;
    }

    public void setDrag_coefficient(Integer drag_coefficient) {
        this.drag_coefficient = drag_coefficient;
    }

    public String getFront_rims_dimensions() {
        return front_rims_dimensions;
    }

    public void setFront_rims_dimensions(String front_rims_dimensions) {
        this.front_rims_dimensions = front_rims_dimensions;
    }

    public String getRear_rims_dimensions() {
        return rear_rims_dimensions;
    }

    public void setRear_rims_dimensions(String rear_rims_dimensions) {
        this.rear_rims_dimensions = rear_rims_dimensions;
    }

    public String getFront_wheels_width() {
        return front_wheels_width;
    }

    public void setFront_wheels_width(String front_wheels_width) {
        this.front_wheels_width = front_wheels_width;
    }

    public String getRear_wheels_width() {
        return rear_wheels_width;
    }

    public void setRear_wheels_width(String rear_wheels_width) {
        this.rear_wheels_width = rear_wheels_width;
    }

    public String getTurning_radius() {
        return turning_radius;
    }

    public void setTurning_radius(String turning_radius) {
        this.turning_radius = turning_radius;
    }

    public String getWeight_power_output() {
        return weight_power_output;
    }

    public void setWeight_power_output(String weight_power_output) {
        this.weight_power_output = weight_power_output;
    }

    public String getTrunk_capacity() {
        return trunk_capacity;
    }

    public void setTrunk_capacity(String trunk_capacity) {
        this.trunk_capacity = trunk_capacity;
    }

    public String getCurb_weight() {
        return curb_weight;
    }

    public void setCurb_weight(String curb_weight) {
        this.curb_weight = curb_weight;
    }

    public String getWheelbase() {
        return wheelbase;
    }

    public void setWheelbase(String wheelbase) {
        this.wheelbase = wheelbase;
    }

    public String getSteering_type() {
        return steering_type;
    }

    public void setSteering_type(String steering_type) {
        this.steering_type = steering_type;
    }

    public String getFront_suspension() {
        return front_suspension;
    }

    public void setFront_suspension(String front_suspension) {
        this.front_suspension = front_suspension;
    }

    public String getRear_suspension() {
        return rear_suspension;
    }

    public void setRear_suspension(String rear_suspension) {
        this.rear_suspension = rear_suspension;
    }

    public Integer getNumber_of_seats() {
        return number_of_seats;
    }

    public void setNumber_of_seats(Integer number_of_seats) {
        this.number_of_seats = number_of_seats;
    }

    public Integer getNumber_of_doors() {
        return number_of_doors;
    }

    public void setNumber_of_doors(Integer number_of_doors) {
        this.number_of_doors = number_of_doors;
    }

    public String getGeneration() {
        return generation;
    }

    public void setGeneration(String generation) {
        this.generation = generation;
    }

}