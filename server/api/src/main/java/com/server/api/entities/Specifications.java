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

    public String getYear() {
        return year;
    }

    public String getEngine() {
        return engine;
    }

    public String getFuel_system() {
        return fuel_system;
    }

    public String getEngine_alignment() {
        return engine_alignment;
    }

    public String getEngine_position() {
        return engine_position;
    }

    public Integer getEngine_valves() {
        return engine_valves;
    }

    public String getEngine_displacement() {
        return engine_displacement;
    }

    public String getEngine_horsepower() {
        return engine_horsepower;
    }

    public String getBore_stroke() {
        return bore_stroke;
    }

    public String getAspriation() {
        return aspriation;
    }

    public String getCompression_ratio() {
        return compression_ratio;
    }

    public String getMax_torque() {
        return max_torque;
    }

    public String getTransmission_offered() {
        return transmission_offered;
    }

    public String getFuel_economy_combined() {
        return fuel_economy_combined;
    }

    public String getFuel_economy_highway() {
        return fuel_economy_highway;
    }

    public String getFuel_econony_city() {
        return fuel_econony_city;
    }

    public String getFuel_range() {
        return fuel_range;
    }

    public String getFuel_capacity() {
        return fuel_capacity;
    }

    public String getCo2_emissions() {
        return co2_emissions;
    }

    public String getTop_speed() {
        return top_speed;
    }

    public String getAccelerations_0_60() {
        return accelerations_0_60;
    }

    public String getDrivetain() {
        return drivetain;
    }

    public String getBody() {
        return body;
    }

    public String getWidth() {
        return width;
    }

    public String getHeight() {
        return height;
    }

    public String getLength() {
        return length;
    }

    public String getFront_axle() {
        return front_axle;
    }

    public String getRear_axle() {
        return rear_axle;
    }

    public String getFront_brakes_disc_type() {
        return front_brakes_disc_type;
    }

    public String getRear_brakes_disc_type() {
        return rear_brakes_disc_type;
    }

    public Integer getDrag_coefficient() {
        return drag_coefficient;
    }

    public String getFront_rims_dimensions() {
        return front_rims_dimensions;
    }

    public String getRear_rims_dimensions() {
        return rear_rims_dimensions;
    }

    public String getFront_wheels_width() {
        return front_wheels_width;
    }

    public String getRear_wheels_width() {
        return rear_wheels_width;
    }

    public String getTurning_radius() {
        return turning_radius;
    }

    public String getWeight_power_output() {
        return weight_power_output;
    }

    public String getTrunk_capacity() {
        return trunk_capacity;
    }

    public String getCurb_weight() {
        return curb_weight;
    }

    public String getWheelbase() {
        return wheelbase;
    }

    public String getSteering_type() {
        return steering_type;
    }

    public String getFront_suspension() {
        return front_suspension;
    }

    public String getRear_suspension() {
        return rear_suspension;
    }

    public Integer getNumber_of_seats() {
        return number_of_seats;
    }

    public Integer getNumber_of_doors() {
        return number_of_doors;
    }

    public String getGeneration() {
        return generation;
    }
}