<?php

namespace Database\Seeders;

use App\Models\MeasurementCategory;
use App\Models\MeasurementField;
use Illuminate\Database\Seeder;

class MeasurementSeeder extends Seeder
{
    public function run(): void
    {
        $categories = [
            [
                'name' => 'General Body Measurements',
                'slug' => 'general',
                'description' => 'Basic body measurements for all garments',
                'sort_order' => 1,
                'fields' => [
                    ['name' => 'Height', 'slug' => 'height', 'unit' => 'inches'],
                    ['name' => 'Weight', 'slug' => 'weight', 'unit' => 'lbs'],
                    ['name' => 'Chest', 'slug' => 'chest', 'unit' => 'inches', 'is_required' => true],
                    ['name' => 'Waist', 'slug' => 'waist', 'unit' => 'inches', 'is_required' => true],
                    ['name' => 'Hip', 'slug' => 'hip', 'unit' => 'inches'],
                    ['name' => 'Arm Length', 'slug' => 'arm_length', 'unit' => 'inches'],
                    ['name' => 'Sleeve Length', 'slug' => 'sleeve_length', 'unit' => 'inches'],
                    ['name' => 'Neck', 'slug' => 'neck', 'unit' => 'inches'],
                    ['name' => 'Shoulder', 'slug' => 'shoulder', 'unit' => 'inches'],
                    ['name' => 'Wrist', 'slug' => 'wrist', 'unit' => 'inches'],
                    ['name' => 'Inseam', 'slug' => 'inseam', 'unit' => 'inches'],
                    ['name' => 'Outseam', 'slug' => 'outseam', 'unit' => 'inches'],
                    ['name' => 'Thigh', 'slug' => 'thigh', 'unit' => 'inches'],
                    ['name' => 'Knee', 'slug' => 'knee', 'unit' => 'inches'],
                    ['name' => 'Ankle', 'slug' => 'ankle', 'unit' => 'inches'],
                ]
            ],
            [
                'name' => 'Male Measurements',
                'slug' => 'male',
                'description' => 'Specific measurements for men\'s clothing',
                'sort_order' => 2,
                'fields' => [
                    ['name' => 'Collar Size', 'slug' => 'collar_size', 'unit' => 'inches'],
                    ['name' => 'Coat Length', 'slug' => 'coat_length', 'unit' => 'inches'],
                    ['name' => 'Trouser Length', 'slug' => 'trouser_length', 'unit' => 'inches'],
                    ['name' => 'Bicep', 'slug' => 'bicep', 'unit' => 'inches'],
                    ['name' => 'Cuff', 'slug' => 'cuff', 'unit' => 'inches'],
                ]
            ],
            [
                'name' => 'Female Measurements',
                'slug' => 'female',
                'description' => 'Specific measurements for women\'s clothing',
                'sort_order' => 3,
                'fields' => [
                    ['name' => 'Bust', 'slug' => 'bust', 'unit' => 'inches', 'is_required' => true],
                    ['name' => 'Under Bust', 'slug' => 'under_bust', 'unit' => 'inches'],
                    ['name' => 'Waist to Hip', 'slug' => 'waist_to_hip', 'unit' => 'inches'],
                    ['name' => 'Kurti Length', 'slug' => 'kurti_length', 'unit' => 'inches'],
                    ['name' => 'Lehenga Length', 'slug' => 'lehenga_length', 'unit' => 'inches'],
                    ['name' => 'Blouse Length', 'slug' => 'blouse_length', 'unit' => 'inches'],
                    ['name' => 'Front Neck', 'slug' => 'front_neck', 'unit' => 'inches'],
                    ['name' => 'Back Neck', 'slug' => 'back_neck', 'unit' => 'inches'],
                ]
            ],
        ];

        foreach ($categories as $categoryData) {
            $fields = $categoryData['fields'];
            unset($categoryData['fields']);
            
            $category = MeasurementCategory::create($categoryData);
            
            foreach ($fields as $index => $fieldData) {
                $fieldData['category_id'] = $category->id;
                $fieldData['sort_order'] = $index + 1;
                $fieldData['is_required'] = $fieldData['is_required'] ?? false;
                
                MeasurementField::create($fieldData);
            }
        }
    }
}